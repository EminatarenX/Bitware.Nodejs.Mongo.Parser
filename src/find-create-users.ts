import { PrismaClient } from '@prisma/client'
import fs from 'fs'
import csv from 'csv-parser'

const prisma = new PrismaClient()

export const parseAndSaveUsers = (path: string) => {
  return new Promise((resolve, reject) => {
    const users: {name: string, email: string}[] = [];
    fs.createReadStream(path)
      .pipe(csv())
      .on('data', data => users.push(data))
      .on('end', async() => {
        try{
          await prisma.usuario.createMany({
            data: users
          })
          resolve("listo, usuarios en db")
        }catch(error){
          reject(error)
        }
      })
  })
}

export const deleteAll = async () => {
  await prisma.usuario.deleteMany()
}

export const findAll = async () => {
  return await prisma.usuario.findMany()
}