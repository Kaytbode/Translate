import { phraseModel, missingModel } from '../database/model';
import { successResponseWithData, errorResponse } from '../utils/response';
import statusCodes from '../utils/status';
import messages from '../utils/message';
import { 
    findPhrase, findMissingPhrases, findAllPhrases, updatePhrase, deletePhrase } from '../services/search';

const createPhrase = async (req, res) => {
    try {
        const { english, yor_explanation, yor_spoken, yor_intonation, yor_video } = req.body;

        const phrase = new phraseModel({
            english,
            yor_explanation,
            yor_spoken,
            yor_intonation,
            yor_video
        });

        const phraseData = await phrase.save();
        
        successResponseWithData(res, statusCodes.created, messages.phraseAdded, phraseData);
    }catch(error) {
        errorResponse(res, error.statusCode || statusCodes.serverError, error);
    }
}

const searchPhrase = async (req, res) => {
    try {
        const { searchPhrase } = req.params;

        const phraseData = await findPhrase(searchPhrase);

        if (phraseData.length < 1) {
            const missingPhrase = new missingModel({
                english: searchPhrase
            });
            
            const missingPhraseData = await missingPhrase.save();

            successResponseWithData(res, statusCodes.success, messages.notFound, phraseData);
        }

        successResponseWithData(res, statusCodes.success, messages.found, phraseData);

    }catch(error) {
        errorResponse(res, error.statusCode || statusCodes.serverError, error); 
    }
}

const getMissingPhrases = async (req, res) => {
    try {
        const phrasesData = await findMissingPhrases();

        successResponseWithData(res, statusCodes.success, messages.found, phrasesData);
    }catch(error) {
        errorResponse(res, error.statusCode || statusCodes.serverError, error);
    }
}


const getAllPhrases = async (req, res) => {
    try {
        const phrasesData = await findAllPhrases();

        successResponseWithData(res, statusCodes.success, messages.found, phrasesData);
    }catch(error) {
        errorResponse(res, error.statusCode || statusCodes.serverError, error);
    }
}

const editPhrase = async (req, res) => {
    try {
        const { english, yor_explanation, yor_spoken, yor_intonation, yor_video, _id } = req.body;

        const phraseObj = {
            english, yor_explanation, yor_intonation, yor_spoken, yor_video, _id 
        };

        const updatedPhraseData = await updatePhrase(phraseObj);

        successResponseWithData(res, statusCodes.success, messages.updated, updatedPhraseData);
    }catch(error) {
        errorResponse(res, error.statusCode || statusCodes.serverError, error);
    }
}

const removePhrase = async (req, res) => {
    try {
        const { _id } = req.body;

        const deletedPhraseData = await deletePhrase(_id);

        successResponseWithData(res, statusCodes.success, messages.deleted, deletedPhraseData);
    }catch(error) {
        errorResponse(res, error.statusCode || statusCodes.serverError, error);
    }
}

export { createPhrase, searchPhrase, getMissingPhrases, getAllPhrases, editPhrase, removePhrase }