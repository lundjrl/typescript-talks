const fn = (arg: any) => { return arg }


const mFn = <Generic>(arg: Generic): Generic => arg

fn('str')
