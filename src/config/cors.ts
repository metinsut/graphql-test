const optionsCors = {
   origin: '*',
   methods: 'GET POST',
   allowedHeaders: 'X-Requested-With,content-type,authorization',
   credentials: true,
   maxAge: 84600,
};

export default optionsCors;
