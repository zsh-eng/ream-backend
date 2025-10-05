import { createAuthClient } from "better-auth/client";
import { cloudflareClient } from "better-auth-cloudflare/client";

const authClient = createAuthClient({
  plugins: [cloudflareClient()], // includes geolocation and R2 file features (if configured)
});

const email = "example@example.com";
const password = "password123";
const name = "John Doe";
const image = "https://example.com/image.jpg";

console.log("Loading client...");

const { data, error } = await authClient.signUp.email(
  {
    email, // user email address
    password, // user password -> min 8 characters by default
    name, // user display name
    image, // User image URL (optional)
  },
  {
    onRequest: (ctx) => {
      //show loading
      console.log("Making request...");
    },
    onSuccess: (ctx) => {
      //redirect to the dashboard or sign in page
      console.log("User signed up successfully");
    },
    onError: (ctx) => {
      // display the error message
      console.log(ctx.error.message);
    },
  },
);

console.log("User signed up successfully", JSON.stringify(data?.user, null, 2));
