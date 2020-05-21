# new-front-project

const forEachSaveHashtag = async (array, res) => {

    const list = array;
    let newArray = [];

    for (const elem of list) {
        let newElem = await saveHashtag(elem, res);
        newArray.push(newElem);
    }

    return newArray;
}

const saveHashtag = (elem, res) => {
    return new Promise((resolve) => {

        let hashtag = new Hashtag();
        hashtag.name = elem;

        hashtag.save((err, hashtagStored) => {
            if (err) return res.status(500).send({ message: 'Error saving hashtag question' });

            if (!hashtagStored) return res.status(404).send({ message: 'The question question has not been saved' });

            // console.log({ id_: hashtagStored._id });
            return resolve(hashtagStored);
        });
    });
}