import FormData from 'form-data' 
import Mailgun from 'mailgun.js' 
import type { NextApiRequest, NextApiResponse } from 'next'

const API_KEY = process.env.MAILGUN_API_KEY || '3cec735dcad77de25eba93339d16dd6c-4c2b2223-dc127edf'
const DOMAIN = process.env.MAILGUN_DOMAIN || 'mail.foym.org'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log('Data', req.body)

  const mailgun = new Mailgun(FormData)
  const client = mailgun.client({ username: 'api', key: API_KEY })

  const { name, email, bio, orgType, } = req.body

  const messageData = {
    from: 'Contact Form <contact@mail.foym.org>',
    to: 'r1554899@gmail.com',
    subject: 'New Contact Form! - FOYM',
    text: `Hello! This is a new contact form submission. 

    You have a new form entry from: ${name} ${email}.

    Here's some more information about them:

    Organization Type: ${orgType}
    Bio: ${bio}


    `,
  }

  try {
    const emailRes = await client.messages.create(DOMAIN, messageData)
    console.log(emailRes)
  } catch (err: any) {
    console.error('Error sending email', err)
  }

  res.status(200).json({ submitted: true })
}