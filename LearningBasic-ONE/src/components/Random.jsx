function Random(){

    let number = Math.random()*100;

    return <div>
        <h3 style={{'backgroundColor':'aquamarine'}}>Random Number is : {Math.round(number)}</h3>
    </div>
}

export default Random;