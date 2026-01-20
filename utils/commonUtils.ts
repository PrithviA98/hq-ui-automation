export class CommonUtils {

    static async generateRandomEmailGenerator(): Promise<string> {
        const email = "user" + Math.random().toString(36).substring(2, 10) + "@gmail.com"
        return email;
    }

}