const MONGOOSE = require("mongoose");
const PROGRAMS_MODEL = require("../src/modules/programs/program.model");
require("dotenv").config();

const ENV = require("../src/config/env");
console.log("MONGODB URL:", ENV.MONGO_DB_URI)
console.log("ENV_NODE:", process.env.Mongo_db)

const programsData = [
    {
        title: "English Learning",
        summary: "AFAO's English Learning Program helps participants strengthen practical English skills that support everyday communication, workplace readiness, and greater confidence. ",
        detail: `Strong English communication skills are essential for accessing education, employment, and full integration in community life. For many individuals in need, immigrant families, and low-income households, language can be one of the first barriers to building a stable and independent future.

AFAO's English Learning Program helps participants strengthen practical English skills that support everyday communication, workplace readiness, and greater confidence. By improving language proficiency, participants are better prepared to pursue new opportunities, increase their independence, and build lasting economic self-sufficiency.`,
        imageSlug: "eng",
        link: "/programs/eng"
    },
    {
        title: "Workforce Development",
        summary: "AFAO's Workforce Development Program equips participants with practical career readiness skills, professional guidance, and workforce preparation that support successful employment.",
        detail: `Meaningful employment creates opportunities for financial stability, personal growth, and long-term independence. Developing the right skills and workplace readiness empowers individuals to compete confidently in today's workforce and build sustainable careers.

AFAO's Workforce Development Program equips participants with practical career readiness skills, professional guidance, and workforce preparation that support successful employment. By strengthening employability and expanding access to career opportunities, the program helps participants move toward lasting economic self-sufficiency and stronger futures.`,
        imageSlug: "wfd",
        link: "/programs/workforce_dev"
    },
    {
        title: "Financial Literacy",
        summary: "AFAO's Financial Literacy Program provides practical financial education that helps participants strengthen their financial capability, make informed financial decisions, and build healthy financial habits.",
        detail: `Financial knowledge empowers individuals and families to make informed decisions, manage resources responsibly, and build long-term economic stability. Understanding how to navigate everyday financial decisions is an essential step toward lasting economic self-sufficiency.

AFAO's Financial Literacy Program provides practical financial education that helps participants strengthen their financial capability, make informed financial decisions, and build healthy financial habits. By improving financial confidence and expanding financial knowledge, the program supports greater independence, long-term stability, and stronger futures.`,
        imageSlug: "fl",
        link: "/programs/financial_literacy"

    },
    {
        title: "DMV Access and Assistance",
        summary: "AFAO's DMV Access and Assistance Program provides general guidance and educational support to help participants better understand California DMV processes, prepare for available services, and navigate requirements with greater confidence.",
        detail: `Access to identification and driver licensing services can play an important role in employment, education, and everyday independence. For many immigrants and low-income individuals, understanding administrative processes and documentation requirements can be a significant barrier to opportunity.

AFAO's DMV Access and Assistance Program provides general guidance and educational support to help participants better understand California DMV processes, prepare for available services, and navigate requirements with greater confidence. By improving access to essential public services, the program helps reduce barriers, expand opportunity, and support lasting economic self-sufficiency.`,
        imageSlug: "dmv",
        link: "/programs/dmv"

    },
    {
        title: "Employer Referral and Job Support",
        summary: "AFAO's Employer Referral and Job Support Program helps participants strengthen their connection to employment opportunities by providing employment referrals, job search guidance, and ongoing support throughout their employment journey.",
        detail: `Access to employment opportunities is an important step toward long-term economic self-sufficiency. Many individuals possess the motivation and potential to succeed but face barriers in connecting with employers and navigating today's job market.

AFAO's Employer Referral and Job Support Program helps participants strengthen their connection to employment opportunities by providing employment referrals, job search guidance, and ongoing support throughout their employment journey. Through collaboration with employers and community partners, the program helps participants move closer to meaningful employment, greater financial stability, and a more independent future.`,
        imageSlug: "ref",
        link: "/programs/referral"
    }


]
async function seed() {
    try {
        await MONGOOSE.connect(ENV.MONGO_DB_URI)
        await PROGRAMS_MODEL.deleteMany({});          // start clean each run
        await PROGRAMS_MODEL.insertMany(programsData);
        console.log("Save")
    }
    catch (err) {
        console.error("seeding Failed: ", err)
        process.exitCode = 1
    }
    finally {
        await MONGOOSE.disconnect()

    }
}

seed()