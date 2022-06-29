export const loggerMiddleware = (store) => (next) => (action) => {

      if(!action.type)
      {
        return next(action)
      }
      console.log(action.type);
      console.log(action.payload);
      console.log('initial state' , store.getState());
      next(action);
    
      console.log('next state' ,store.getState());
    }