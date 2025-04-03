import dotenv from 'dotenv';
import * as yup from 'yup';


const EnvSchema = yup.object().shape({
    NODE_ENV: yup.string().required().oneOf(['development', 'production', 'test']).default('development'),
    PORT: yup.number().required().default(8080),
    MONGODB_URI: yup.string().required(),
    JWT_SECRET: yup.string().required().default('catFly200@smiles'),
});


export function loadEnvConfig() {
    dotenv.config();

    try {
        const parsedEnv = EnvSchema.validateSync(process.env, { abortEarly: false });

        console.log('✅ Environment variables loaded successfully');

        return parsedEnv;
    } catch (error) {
        if (error instanceof yup.ValidationError) {
            console.error('❌ Invalid environment configuration:');
            error.inner.forEach(err => {
                console.error(`- ${err.path}: ${err.message}`);
            });
            process.exit(1);
        }
        throw error;
    }
}


export const env = loadEnvConfig();

export const isDevMode = env.NODE_ENV === 'development';