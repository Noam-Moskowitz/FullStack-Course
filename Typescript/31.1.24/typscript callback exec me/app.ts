const contacts:object={
    id:1,
    name:`Noam Moskowitz`,
    email:`nammz101@gmail.com`,
    phone:`0546107337`
}
const contacts2:object={
    id:2,
    name:`Noam Glockskwitz`,
    email:`nammz101@gmail.com`,
    phone:`0546107287`
}

function findContact(obj:object, id:number):object| string {
    if (obj.id==id) {
        return obj
    }else{
        return `no contact was found with this id`
    }
    }

    const test1Success = findContact(contacts,1)
    const test1Failure = findContact(contacts,2)
    const test2Success = findContact(contacts2,2)
    const test2Failure = findContact(contacts2,1)
    console.log(test1Success);
    console.log(test1Failure);
    console.log(test2Success);
    console.log(test2Failure);
    