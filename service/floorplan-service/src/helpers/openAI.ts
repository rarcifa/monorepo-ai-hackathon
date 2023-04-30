import { OPENAI_API_KEY } from '@src/config/constants';
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export const openAI = {
  /**
   * @summary  generated embedding
   * @param  {string} input - input string
   * @returns  {Promise<string>} - returned value
   */
  generateEmbedding: async (input: string): Promise<string> => {
    const response: any = await openai.createEmbedding({
      model: 'text-embedding-ada-002',
      input: input,
    });
    return response.data.data[0].embedding;
  },

  /**
   * @summary  generated image
   * @param  {string} input - input string
   * @returns  {Promise<string>} - returned value
   */
  generateImage: async (input: string): Promise<string> => {
    const response = await openai.createImage({
      prompt: input,
      n: 1,
      size: '1024x1024',
    });
    const image_url = response.data.data[0].url;
    return image_url;
  },
};
