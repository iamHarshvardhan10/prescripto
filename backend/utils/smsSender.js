import twilio from "twilio";

const accountsid = process.env.TWILLIO_ACCOUNT_SID
const accounttoken = process.env.TWILLIO_ACCOUNT_TOKEN


const client = new twilio(accountsid, accounttoken);

const smsSender = async (body, to) => {
    try {
        const info = await client.messages.create({
            body: `${body}`,
            from: process.env.TWILLIO_PHONE_NUMBER,
            to: `${to}`
        })

        console.log(info)
        return info;
    } catch (error) {
        console.log(error.message)
    }
}


export default smsSender;
