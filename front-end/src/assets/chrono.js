/*
    use-case: if a number that represents
    hours or minutes contains only one number
    it transforms the number like in the example:
    "9" => "09"
*/


export const zeroer = (number) =>
{
    if(number == 0) // best case scenario
    {
        number = 0;
        return number;
    }
    else if(number.toString().length == 1)
    {
        return "0" + number;
    }

    return number;
};

// check if string has double zeros for example "00" = true, "10" = false
export const check_zeros = (string) =>
{
    if(string == "00") // best case scenario
    {
        return true;
    }
    return false;
};

// returns number without zero ---> 08 => 8
export const trim = (part) =>
{
    if(part[0] == "0")
    {
        const tmp = part[1];
        part = tmp;
    }
    return part;
};

// deletes zeroes from a list of 2 numbers for example [20,09] => [20, 9]
export const trim_clock = (list) =>
{
    for(let i = 0; i < list.length; ++i)
    {
        if(check_zeros(list[i]))
        {
            list[i] = "0";         
        }
        else
        {
            const tmp = trim(list[i]);
            list[i] = tmp;
        }
    }

    return list;
};

// get's clock from string (do not use this function since it was designed specifically for a particular string)
export const get_clock = (string) =>
{
      
    const list = ["", ""];

    for(let i = 0; i < 2; ++i)
    {
        if(list[0] == "")
        {
            list[0] = string[i];
        }
        else
        {
            list[0] = list[0] + string[i];
        }
    }

    for(let i = 3; i < 5; ++i)
    {
        if(list[1] == "")
        {
            list[1] = string[i];
        }
        else
        {
            list[1] += string[i];
        }
    }

    return list;
};


export const get_time = (string) =>
{
    let dur = "";

    for(let i = 0; i < string.length; ++i)
    {
        if(string[i] != " ")
        {
            dur += string[i];
        }
        else
        {
            break;
        }
    }
    return dur;
};

export default { get_clock };

// to run tests
/*
module.exports.zeroer = (number) =>
{
    if(number == 0) // best case scenario
    {
        number = 0;
        return number;
    }
    else if(number.toString().length == 1)
    {
        return "0" + number;
    }

    return number;
};

// check if string has double zeros for example "00" = true, "10" = false
module.exports.check_zeros = (string) =>
{
    if(string == "00") // best case scenario
    {
        return true;
    }
    return false;
};

// returns number without zero ---> 08 => 8
module.exports.trim = (part) =>
{
    if(part[0] == "0")
    {
        const tmp = part[1];
        part = tmp;
    }
    return part;
};

// deletes zeroes from a list of 2 numbers for example [20,09] => [20, 9]
module.exports.trim_clock = (list) =>
{
    for(let i = 0; i < list.length; ++i)
    {
        if(module.exports.check_zeros(list[i]))
        {
            list[i] = "0";         
        }
        else
        {
            const tmp = module.exports.trim(list[i]);
            list[i] = tmp;
        }
    }

    return list;
};

// get's clock from string (do not use this function since it was designed specifically for a particular string)
module.exports.get_clock = (string) =>
{
      
    const list = ["", ""];

    for(let i = 0; i < 2; ++i)
    {
        if(list[0] == "")
        {
            list[0] = string[i];
        }
        else
        {
            list[0] = list[0] + string[i];
        }
    }

    for(let i = 3; i < 5; ++i)
    {
        if(list[1] == "")
        {
            list[1] = string[i];
        }
        else
        {
            list[1] += string[i];
        }
    }

    return list;
};


module.exports.get_time = (string) =>
{
    let dur = "";

    for(let i = 0; i < string.length; ++i)
    {
        if(string[i] != " ")
        {
            dur += string[i];
        }
        else
        {
            break;
        }
    }
    return dur;
};
*/