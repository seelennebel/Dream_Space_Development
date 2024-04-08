// if number is 8, it returns "08"
export const zeroer = (number) =>
{
    if(number == 0)
    {
        number = 0;
        return number;
    }
    else if(number.toString().length == 1)
    {
        return "0" + number;
    }
    else
    {
        return number;
    }
    
}

// check if string has zeros for example 00:00 = true, 10:12 = false
export const check_zeros = (part) =>
{
    if(part == "00")
    {
        return true;
    }
    else
    {
        return false;
    }
}

// returns number without zero ---> 08 => 8
export const trim = (part) =>
{
    if(part[0] == "0")
    {
        let tmp = part[1];
        part = tmp;
    }
    return part;
}

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
            let tmp = trim(list[i]);
            list[i] = tmp;
        }
    }

    return list;
}

// get's clock from string (do not use this function since it was designed specifically for a particular string)
export const get_clock = (string) =>
{
      
    let list = ["", ""];

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
}

// also don't use
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
}