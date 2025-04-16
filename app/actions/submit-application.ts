"use server"

import { createTransport } from "nodemailer"

// type ApplicationFormData = {
//     fullName: string
//     email: string
//     phone?: string
//     position: string
//     resumeData?: string
//     resumeFilename?: string
//     coverLetterData?: string
//     coverLetterFilename?: string
//     comments?: string
// }

export async function submitApplication(formData: FormData): Promise<{ success: boolean; message: string }> {
    try {
        // Extract form data
        const fullName = formData.get("fullName") as string
        const email = formData.get("email") as string
        const phone = formData.get("phone") as string
        const position = formData.get("position") as string
        const comments = formData.get("comments") as string

        // Get file data
        const resumeFile = formData.get("resume") as File
        const coverLetterFile = formData.get("coverLetter") as File

        if (!fullName || !email || !position || !resumeFile) {
            return {
                success: false,
                message: "Please fill in all required fields and upload a resume.",
            }
        }

        // Configure email transport
        const transporter = createTransport({
            service: "gmail",
            secure: true,
            auth: {
                user: 'nati2mulugeta@gmail.com',
                pass: 'wwby zead lgfp oulo',
            },
        })

        // Prepare attachments
        const attachments = []

        if (resumeFile && resumeFile.size > 0) {
            const resumeBuffer = Buffer.from(await resumeFile.arrayBuffer())
            attachments.push({
                filename: resumeFile.name,
                content: resumeBuffer,
            })
        }

        if (coverLetterFile && coverLetterFile.size > 0) {
            const coverLetterBuffer = Buffer.from(await coverLetterFile.arrayBuffer())
            attachments.push({
                filename: coverLetterFile.name,
                content: coverLetterBuffer,
            })
        }

        // Send email
        await transporter.sendMail({
            from: "application@tatariy.com",
            to: "nati2mulugeta@gmail.com",
            subject: `Job Application: ${position}`,
            html: `
        <h1>New Job Application</h1>
        <p><strong>Position:</strong> ${position}</p>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Comments:</strong> ${comments || "None"}</p>
        <p>Please see attached files for resume and cover letter (if provided).</p>
      `,
            attachments,
        })

        return {
            success: true,
            message: "Application submitted successfully!",
        }
    } catch (error) {
        console.error("Application submission error:", error)
        return {
            success: false,
            message: "There was an error submitting your application. Please try again.",
        }
    }
}
