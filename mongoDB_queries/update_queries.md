db.birds.updateOne(
    {
        _id: ObjectId("6268413c613e55b82d7065d2")
    },
    {
        $set: {"tags": {$push: {"geese", "herbivore", "migration"}}} 
        // This is wrong, it's supposed to push an array of tags, but pushed "$push" as the field name.
    }
);

db.birds.findOne({common_name: "Canada Goose"});

db.birds.updateOne(
    {_id: ObjectId("6268471e613e55b82d7065d7")},
    {
        $push: {diet: ["newts", "opossum", "skunks", "squirrels"]}
    }
);

db.birds.findOne({_id: ObjectId("6268471e613e55b82d7065d7")});

db.birds.updateOne(
    {common_name: "Robin Redbreast"},
    {
        $inc: {
            "sightings": 1,
        },
        $set: {
            last_updated: new Date(),
        },
    },
    {upsert: true}
);

db.podcasts.findAndModify(
    query: {key: value},
    update: {operator: { key: value}},
    new: true
);



