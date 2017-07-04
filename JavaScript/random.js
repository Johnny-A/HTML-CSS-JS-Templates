

function randomNum(low, high)
{
    return Math.random()*(high-low) + low;
}

function randomInt(low, high)
{
    return Math.floor(Math.random()*(high-low+1)) + low;
}

function randomChar(str)
{
    return str.charAt(randomInt(0, str.length-1));
}

function randomOneOf(list)
{
    return list[randomInt(0, list.length-1)];
}
