import { phraseModel } from '../database/model';
import { successResponseWithData, errorResponse } from '../utils/response';
import statusCodes from '../utils/status';
import messages from '../utils/message';
import { findPhrase } from '../services/search';

const createPhrase = async (req, res) => {
    try {
        const { english, yoruba, link } = req.body;

        const phrase = new phraseModel({
            english,
            yoruba,
            link
        });

        const phraseData = await phrase.save();
        
        successResponseWithData(res, statusCodes.created, messages.phraseAdded, phraseData);
    }catch(error) {
        errorResponse(res, error.statusCode || statusCodes.serverError, error);
    }

}

const searchPhrase = async (req, res) => {
    try {
        const { english } = req.body;

        const phraseData = await findPhrase(english);

        successResponseWithData(res, statusCodes.success, messages.found, phraseData);

    }catch(error) {
        errorResponse(res, error.statusCode || statusCodes.serverError, error); 
    }
}

export { createPhrase, searchPhrase }