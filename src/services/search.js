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

export { findPhrase, findMissingPhrases }