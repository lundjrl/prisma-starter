import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const user_info_data = [
  {
    email: 'test@example.com',
    name: 'Billy',
  },
]

const main = async () => {
  console.log('Start seed process')

  user_info_data.map(async user => {
    const u = await prisma.userInfo.create({
      data: user,
    })
    console.log(`Created user with id: ${u.id}`)
  })

  console.log('Process complete')
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
