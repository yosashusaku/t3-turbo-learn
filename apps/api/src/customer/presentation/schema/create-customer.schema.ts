import { z } from 'zod';

export const createCustomerInputSchema = z.object({
  name: z.string().min(1, '名前は必須です'),
  email: z.string().email('有効なメールアドレスを入力してください'),
  address: z.string().min(1, '住所は必須です')
});

export type CreateCustomerInput = z.infer<typeof createCustomerInputSchema>;

export const createCustomerOutputSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  address: z.string()
});

export type CreateCustomerOutput = z.infer<typeof createCustomerOutputSchema>;
