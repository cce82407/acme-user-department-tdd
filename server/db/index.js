const chalk = require ('chalk')
const { User, Department} = require('./models/index')
const db = require('./db')
const sync = async (force = false) => {
    try {
        await db.sync({force})

    }
    catch(e) { console.log(chalk.red('failed to sync to db'))
        throw e
        }
    }

    const users = [
        { 
            name: 'Shruti',
         },
         {
            name: 'Cynthia',
         }
    ]

    const departments = [
        {
            name: 'HR',
        },
        {
            name: 'Engineering'
        }
    ]

    const seed = async () => {
        await sync(true)
        const createdDepartments = await Promise.all(departments.map(department => Department.create(pokemon)));
  await Promise.all(startingTrainers.map(trainer => Trainer.create(trainer)));

    } 
