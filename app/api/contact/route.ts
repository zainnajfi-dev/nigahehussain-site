import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate form data
    const { name, phone, email, message, projectType, consent } = body

    if (!name || !phone || !email || !message || !consent) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // In production, you would send this via email service (SendGrid, Nodemailer, etc.)
    console.log("Contact form submission:", {
      name,
      phone,
      email,
      message,
      projectType,
      timestamp: new Date().toISOString(),
    })

    // TODO: Implement email sending with SendGrid or similar service
    // Example:
    // await sendEmail({
    //   to: 'info@nigahhussain.com',
    //   subject: `New Project Inquiry from ${name}`,
    //   html: `...template...`
    // })

    return NextResponse.json({ message: "Form submitted successfully" }, { status: 200 })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 })
  }
}
