const mongoose=require('mongoose')
const dotenv=require('dotenv')
require('colors')
const connectDb=require('./config/config')
const menu=require('./modals/menumodal')
const menus=require('./data/pizza-data')

//config dot env and mongodb file
dotenv.config()
    connectDb()

    // import data

    const importdata= async () => {
        try {
            await menu.deleteMany()
            const sampledata=menus.map(menu=> {return {...menu}})
            await menu.insertMany(sampledata)
            console.log('data_imported'.bgGreen.white)
            process.exit()
        } 
        catch (error) {
            console.log(`${error}`.bgRed.white)
            process.exit(1)
        }
    }

    const dataDestroy=() =>
    {

    }
    if(process.argv[2]==='-d')
    {
        dataDestroy()
    }
    else{
        importdata()
    }