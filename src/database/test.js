const db = require('./db')
const createProffy = require('./createProffy')

db.then(async (db) => {
  proffyValue = {
    name: 'Mayk Brito',
    avatar: 'https://avatars.githubusercontent.com/u/6643122?v=4',
    whatsapp: '85987886322',
    bio: 'Instrutor de Educação Física',

  }

  classValue = {
    subject: 4,
    cost: '20',
  }

  classScheduleValues = [
    {
      weekday: 1,
      time_from: 720,
      time_to: 1220
    },
    {
      weekday: 0,
      time_from: 520,
      time_to: 1220
    }
  ]

  //await createProffy(db, {proffyValue, classValue, classScheduleValue})

  const selectedProffys = await db.all("SELECT * FROM proffyss")

  const selectClassesAndProffys = await db.all(`
    SELECT classes.*, proffys.*
    FROM proffys 
    JOIN classes ON (classes.proffy_id = proffys.id)
    WHERE classes.proffy_id = 1;
  `)

  const selectClassesSchedules = await db.all(`
    SELECT class_schedule.*
    FROM class_schedule
    WHERE class_schedule.class_id = "1"
    AND class_shedule.weekday = "0"
    AND class_schedule.time_from <= "1300"
    AND class_schedule.time_to > "1300"
  `)
})