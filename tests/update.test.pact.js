const Pact = require('@pact-foundation/pact');
const url = 'http://localhost:8989';
const service = require('../app/services/note.service.js');
const update = service.note('http://localhost:8989/notes').update;

describe('The API', () => {

    // Copy this block once per interaction under test
    describe('Update note if exists', () => {
        const EXPECTED_BODY = [{
            title: "first notes",
            content: "Wa hahaha"
        }];
        beforeEach(() => {
            const interaction = {
                state: 'Have a note with id 1',
                uponReceiving: 'a request to update an existing note',
                withRequest: {
                    method: 'PUT',
                    path: '/notes/1',
                    body: EXPECTED_BODY[0],
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    }
                },
                willRespondWith: {
                    status: 200,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: EXPECTED_BODY
                }
            };
            return provider.addInteraction(interaction);
        });

        // add expectations
        it('Returns the updated note', done => {
            update('1', EXPECTED_BODY[0])
                .then(response => {
                    expect(response).toEqual(EXPECTED_BODY);
                })
                .then(done);
        });
    });
});