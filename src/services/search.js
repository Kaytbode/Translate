import { phraseModel, missingModel } from '../database/model';

const findPhrase = async (phrase) => {
    try {
        return await phraseModel.find(
            { $text: { $search: phrase } },
            { score: { $meta: 'textScore'} }
        ).sort( { score: { $meta: 'textScore'} } )
        .exec();
    }catch(err){
        throw err;
    }
}

const findMissingPhrases = async () => {
    try {
        return await missingModel.find({});
    }catch(err){
        throw err;
    }
}

const findAllPhrases = async () => {
    try {
        return await phraseModel.find({});
    }catch(err){
        throw err;
    }
}

const deletePhrase = async (_id) => {
    try {
        return await phraseModel.deleteOne({_id});
    }catch(err){
        throw err;
    }
}

const updatePhrase = async (phraseObj) => {
    try{
        const { _id, 
                english, 
                yor_explanation,
                yor_spoken,
                yor_intonation,
                yor_video
            } = phraseObj;
        
        let phraseDoc = await phraseModel.findOne({_id});

        phraseDoc.english = english;
        phraseDoc.yor_explanation = yor_explanation;
        phraseDoc.yor_spoken = yor_spoken;
        phraseDoc.yor_intonation = yor_intonation;
        phraseDoc.yor_video = yor_video;

        await phraseDoc.save();
    }catch(err){
        throw err;
    }
}

export { findPhrase, findMissingPhrases, findAllPhrases, updatePhrase, deletePhrase }