export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.hook("apollo:auth", ({ client, token }) => {
        token.value = process.env.TOKEN;
        // token.value = "2|jfThEVNICHRyGakqnZc5oEjbytGacBKaCifElLkU";
        console.log(process.env.TOKEN);
    });
});
