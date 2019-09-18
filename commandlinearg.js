// Uses of yargs command likne argument

const yargs = require('yargs');

// Creating add command

yargs.command({
    command: 'add',
    describe: 'adding a note!',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'

        }
    },
    handler: function(argv) {
        // console.log('Adding a new node!', argv);
        console.log('Title:' + argv.title) //It will print the data in more organise form
        console.log('Body:' + argv.body)
    }
})
debugger
// Create a Remove command

yargs.command({
    command: 'remove',
    describe: 'Removing a note',
    handler: function() {
        console.log('removing the note')
    }
})

// Create a list command

yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler: function() {
        console.log('listing out all the notes')
    }
})

// Create a Read command

yargs.command({

    command: 'read',
    describe: 'raed a note',
    handler: function() {
        console.log('Reading a notes')
    }
})


//console.log(yargs.argv); // printing the args making all things work

yargs.parse() //method-2 to work above program