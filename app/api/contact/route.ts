import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // 1. Basic Server-Side Validation
    if (!body.Email || !body.Name) {
      return NextResponse.json(
        { error: 'Name and Email are required' },
        { status: 400 }
      )
    }

    // 2. Forward the data secretly to FormSubmit
    // Your email is hidden here on the server
    const response = await fetch("https://formsubmit.co/ajax/selertson@gmail.com", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        ...body,
        _captcha: "false", // Keeps it seamless
        _template: "table" // Formats the email nicely
      })
    })

    if (!response.ok) {
      throw new Error('FormSubmit rejected the request')
    }

    // 3. Return success to the frontend
    return NextResponse.json(
      { success: true, message: 'Transmission Secured' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Secure API Error:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}