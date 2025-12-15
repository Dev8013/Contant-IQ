import { Car, MailIcon, MessageCircle, MessageCircleCode, MessageCircleDashedIcon, MessageCirclePlus, MessageCircleReply } from 'lucide-react'
import React from 'react'
import Navbar from '~/components/Navbar'
import { Button } from '~/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card'
import { Field, FieldGroup, FieldLabel } from '~/components/ui/field'
import { Input } from '~/components/ui/input'

const contact = () => {
  return (
    <main className='w-full min-h-screen flex flex-col'>
      <Navbar />
      <div className='flex-1 flex items-center justify-center'>
      <div className='w-full max-w-2xl px-4 text-center'>
        <p className='text-6xl font-bold'>Get in<b className='font-semibold text-purple-600'>Touch</b></p>
        <p className='text-gray-600 mt-2 mb-2'>Have questions? We'd love to hear from you.</p>
        <div className='grid-cols-2 flex gap-4 mt-6 items-center justify-center'>
          <Card className='w-1/2 p-4'>
            <div className='flex gap-2 items-center'>
              <MailIcon />
              <div className='text-start'>
                <p className='font-bold'>Email Us</p>
                <p className='text-gray-600'>support@contentiq.ai</p>
              </div>
            </div>
              
          </Card>
          <Card className='w-1/2 p-4'>
            <div className='flex gap-2 items-center'>
              <MessageCircle/>
              <div className='text-start'>
                <p className='font-bold'>Live Chat</p>
                <p className='text-gray-600'>Available 9am - 6pm EST</p>
              </div>
            </div>
              
          </Card>
        </div>
        <Card className='mt-8'>
          <CardHeader className='text-start'>
            <CardTitle className='font-semibold'>Send us a message</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="text">Name</FieldLabel>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  required
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@mail.com"
                  required
                />
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="text">Message</FieldLabel>
                </div>
                <Input className='h-20' id="text" type="text" required 
                  placeholder="How can we help you?"
                />
              </Field>
              <Field>
                <Button type="submit" className="bg-purple-600">Send Message<MessageCirclePlus/></Button>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
      </div>
      </div>
    </main>
  )
}

export default contact