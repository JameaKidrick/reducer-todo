// SET UP REDUCER FILE WITH INITIAL STATE OF OBJECTS WITH TASKS AND GENERAL REDUCER

export const initialState = [
  {
    task: 'Clean room',
    completed: false,
    id: 111
  },
  {
    task: 'Cook dinner',
    completed: false,
    id: 127
  },
  {
    task: 'Walk the dogs',
    completed: false,
    id: 146
  },
  {
    task: 'Write essay',
    completed: false,
    id: 153
  },
  {
    task: 'Exercise',
    completed: false,
    id: 189
  }
]

export const reducer = (state, action) => {
  switch(action.type){
    case 'ADD_TASK':
      const newTask = {
        task: action.payload,
        completed: false,
        id: Date.now()
      };
      console.log('state', state);
      return [...state, newTask];

    case 'EDIT_TASK':
      console.log(state)
      return{
        ...state,
        state: !state.completed,
      }
    default:
    return state;
  }
}