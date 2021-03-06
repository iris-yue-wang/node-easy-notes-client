const { Matchers } = require('@pact-foundation/pact');
const { eachLike, like, term, integer, hexadecimal, iso8601DateTimeWithMillis } = Matchers;

const exampleNotes = [
    {
        _id: '1b71b7eeecbd28bac0b3f1ea',
        title: 'First Note',
        content: 'Doe, a deer, a female deer'
    },
    {
        _id: '28bac0b3f1ea1b71b7eeecdb',
        title: 'Second Note',
        content: 'Ray, a drop of golden sun'
    },
    { // Either of the above notes after update
        title: 'Fifth Note',
        content: 'Sow, a needle pulling thread'
    }
]

const requestBodies = [
    {
        title: exampleNotes[0].title,
        content: exampleNotes[0].content
    },
    {
        title: exampleNotes[1].title,
        content: exampleNotes[1].content
    },
    {
        title: exampleNotes[2].title,
        content: exampleNotes[2].content
    }
];

const responseBodies = [
    {
        _id: hexadecimal(),
        title: like(exampleNotes[0].title),
        content: like(exampleNotes[0].content),
        createdAt: iso8601DateTimeWithMillis(),
        updatedAt: iso8601DateTimeWithMillis(),
        __v: integer()
    },
    {
        _id: hexadecimal(),
        title: like(exampleNotes[1].title),
        content: like(exampleNotes[1].content),
        createdAt: iso8601DateTimeWithMillis(),
        updatedAt: iso8601DateTimeWithMillis(),
        __v: integer()
    },
    {
        _id: hexadecimal(),
        title: like(exampleNotes[2].title),
        content: like(exampleNotes[2].content),
        createdAt: iso8601DateTimeWithMillis(),
        updatedAt: iso8601DateTimeWithMillis(),
        __v: integer()
    }
];

responseBodies[0]._id.data.generate = exampleNotes[0]._id;
responseBodies[1]._id.data.generate = exampleNotes[1]._id;
// The last one is set during the update test itself

module.exports = {
    exampleNotes: exampleNotes,
    requestBodies: requestBodies,
    responseBodies: responseBodies
};
