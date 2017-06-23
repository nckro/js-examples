var desks = [
  { type: 'sitting' },
  { type: 'standing' },
  { type: 'sitting' },
  { type: 'sitting' },
  { type: 'standing' }
];

var deskTypes = desks.reduce(function(state, desk) {
    switch ( desk.type ) {
      case 'sitting':
      	return {sitting: state.sitting+1, standing: state.standing};
        break;
      case 'standing':
        return {sitting: state.sitting, standing: state.standing+1};
        break;
    }
}, { sitting: 0, standing: 0 });

deskTypes;
