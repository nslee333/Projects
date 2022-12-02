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

db.birds.findAndModify({
    query: { common_name: "Blue Jay"},
    update: { $inc: { sightings_count: 1 }},
    new: true,
});

db.books.updateMany({
    --filter--{filter field: {operator: value}},
    --update--{$set: {status: "LEGACY"}},
    {options}
});

db.birds.updateMany(
    {
        common_name: 
        {
            $in: ["Blue Jay", "Grackle"],
        },
    },
    {
        $set: {
            last_seen: ISODate("2022-01-01"),
        },
    }
)

db.birds.updateMany(
  {
    common_name: {
      $in: ["Blue Jay", "Grackle"],
    },
  },
  {
    $set: {
      last_seen: ISODate("2022-01-01"),
    },
  }
)

db.podcasts.deleteOne({filter}, {options});

db.birds.deleteOne({_id: ObjectId("62cddf53c1d62bc45439bebf")});\

db.birds.deleteMany({
    sightings_count: {$lte: 10}
});

db.companies.find({category_code: "music"}).sort({name:1});

db.companies.find({category_code: "music"}, {name:1, number_of_employees:1).sort({number_of_employees: -1}}).limit(3);

db.sales.find().sort({saleDate:1});

db.sales.find({
    couponUsed: true
}).sort({saleDate:-1});

db.sales.find({
    "items.name": {$elemMatch: {$eq: ["backpack", "laptop", "printer paper"]}}
}).sort({saleDate:-1}).limit(3);

db.inspections.findOne();

db.inspections.findOne({sector: "Restraunt - 818"}, {business_name:1, result:1, _id:0});

db.inspections.find({result: {$in: ["Pass", "Warning"]}, {date:0, "address.zip":0});

db.sales.find().sort({saleDate:1, storeLocation:1, purchaseMethod:1, _id:1});

db.sales.find({ storeLocation: "Denver", }, { storeLocation: 1, saleDate: 1, purchaseMethod: 1, })

db.sales.find(
    {
        "customer.age": {$lt: 30},
        "customer.satisfaction": {$gt: 3}
    },
    {
        "customer.age":1,
        "customer.satisfaction":1,
        storeLocation:1,
        saleDate:1,
        _id: 0
    }
)

db.sales.find(
    {
        storeLocation: {$in: ["Seattle", "New York"]}
    },
    {
        purchaseMethod: 0,
        customer: 0,
        couponUsed: 0,
    }
);

db.collection.countDocuments({query}, {options});

db.trips.findOne();

db.trips.countDocuments();

db.trips.countDocuments({tripDuration: {$gt: 120}, usertype: "Subscriber"});

db.sales.countDocuments({});

db.sales.countDocuments({storeLocation: "Denver", couponUsed: true});

db.sales.countDocuments({"items.name": "laptop", "items.price": {$lt: 600}});

db.sales.countDocuments({items: {$elemMatch: {name: "laptop", price: {$gt: 600}}}});

db.sales.countDocuments({ items: { $elemMatch: { name: "laptop", price: { $lt: 600 } } } } );

[Aggregation]:

db.birds.aggregate(
    [
        {
            <stage1>
        },
        {
            <stage2>
        },
        {
            ...
        }
    ]
);



db.birds.aggregate(
    [
        {
            $match: {species_common: "Eastern Bluebird"}
        },
        {
            $group: {
                _id: "$location.coordinates",
                number_of_sightings: {
                    $count: {}
                }
            }
        }   
    ]
);

db.sightings.aggregate([
  {
    $match: {
        species_common: 'Eastern Bluebird'
    }
  }, {
    $group: {
        _id: '$location.coordinates',
        number_of_sightings: {
            $count: {}
        }
    }
  }
]);

db.collection.aggregate(
    [
        {
            $sort: {
                pop: -1
            },
            {
                $limit: 3
            }
        }
    ]
);



db.sightings.aggregate(
    [
        {
            $sort: {
                "location.latitude": -1
            },
        },
        {
            $limit: 4
        }
    ]
);

db.zips.aggregate([
    {$project: {
        state: 1,
        zip: 1,
        population: "$pop",
        _id:0 
        }
    }
]);

db.zips.aggregate([
    {$set: {
        pop_2022: {$round: {$multiply: [1.0031, "$pop"]}}
        }
    }
]);

db.zips.aggregate([
    {$count: "total_zips"}
]);

db.sightings.aggregate([
    {
        $project: {
            _id: 0,
            date: 1,
            species_common: 1,
        }
    }
]);

db.birds.aggregate([
    {
        $set: {
            'class': "bird",
        }
    }
    
]);

db.birds.find({});

db.birds.aggregate([
    {
        $match: {
            common_name: "Eastern Bluebirds",
        }
    },
]);


db.birds.find({}, {common_name:1});

db.sightings.find({species_common: "Eastern Bluebird"}, {species_common: 1, _id:0});


db.sightings.find({species_common: "Eastern Bluebird"});

db.sightings.aggregate([
    {
        $match: {
            species_common: "Eastern Bluebird",
            date: {
                    $gt: ISODate("2022-01-01T00:00:00.0Z"),
                    $lt: ISODate("2023-01-01T00:00:00.0Z"
            }
        }
    },
    {
        $count: "bluebird_sightings_2022"
    }
]);

db.sightings.aggregate([
    {
    $match: {
        date: {
        $gt: ISODate('2022-01-01T00:00:00.000Z'),
        $lt: ISODate('2023-01-01T00:00:00.000Z')
        },
        species_common: 'Eastern Bluebird'
    }
    }, {
    $count: 'bluebird_sightings_2022'
    }
]);

db.zips.aggregate([
    {
        $group:{
            _id: "$state",
            total_pop: {$sum: "$pop"}
        }
    },
    {
        $match: {
            total_pop:{$lt:1000000}
        }
    },
    {
        $out: "small_states"
    }
]);

db.sightings.aggregate([
    {
        $match: {
            date: {
                $gt: ISODate('2022-01-01T00:00:00.000Z'),
                $lt: ISODate('2023-01-01T00:00:00.000Z')
            },
        }
    },
    {
        $out: "sightings_2022",
    }
]);

db.sightings_2022.findOne();

[Indexing]:

db.collection.createIndex({fieldname:1}) // field and sort order - 1 for ascending.

db.collection.createIndex({fieldname:1}, {unique:true})

db.collection.getIndexes()

db.collection.explain().find({field: value})

db.transfers.getIndexes();

db.accounts.createIndex({account_id:1}, {unique:true});

db.accounts.explain().find({account_id:"MDB829000996"});



