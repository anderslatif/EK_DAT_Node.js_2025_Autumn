# Time to deploy!

Create a HTML website served with Express that revolves around time. 

**Creativity** is **strongly** encouraged. 

**Hand-in**: In Teams with a link to the code in the repository and a link to the deployment. I will make a thread. 

---

## Deployment

It must be deployed somehow. Deployment is not a learning goal for the course but it would still be neat if everyone could figure it out for this assignment. 

Vercel is one option but there are many alternatives and you are free to choose any you like. 

Vercel is free to use and doesn't require a credit card. The downside is that to make hosting cheap for them they only start your project if someone is requesting a route. This is called serverless computing.

Remember to define all CSS And JS in the HTML files for this assignment and look for the vercel.json in this respository and add it to your project.

<!-- ---

## Hand-in

In GitHub Classroom (link in Teams):

1. The code

2. In README.md: Link that the project is deployed on

 -->
---

## Vercel Quirks

### CSS and JS

Based on your knowledge so far, you can't have multiple files for CSS and JS in Vercel even if it works locally. Please keep all CSS and JS in the HTML files. 

Next week I will show you how to serve multiple client files.

### Caching

If you experience caching problems in Vercel (solved by hard refresh) then add this the affected route (preferably) or globally to all routes:

```bash
res.set('Cache-Control', 'no-store'); // Prevent caching
```

### Storing data on the server

Deploying on Vercel is free or costs little because it is Serverless. That means that it doesn't run a server all the time but creates an instance on-demand. 

The result is that storing data in variables on the server will not be kept once the server shuts down. If you want to store data, then it should be done externally, which we haven't touched upon yet.

<!-- ---

# GitHub Classroom Quirks

You hand in by pushing in the GitHub Classroom repo created when you press the green `Accept the Assignment` button. I will make the repository private as default. If you want to share the code or deploy to Vercel then you should fork the repository to your own user. You cannot deploy to Vercel under my user since you don't have sufficient permissions. 

Remember: You hand-in when you push. You can push multiple times.  -->