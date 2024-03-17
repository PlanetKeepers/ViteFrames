-- beekeeper.lua

-- Import necessary libraries
local handlers = require("Handlers")
local json = require("json")
local ao = require("ao")

-- Initialize balances table to hold token balances
local balances = {}

-- Set the total supply of tokens
local totalSupply = 21000000000

-- Define the function to check if an {FID} number is eligible for receiving tokens
local function isValidFID(fid)
    -- Check if the {FID} number meets certain criteria (replace this with your specific criteria)
    -- For example, check if the {FID} is in a predefined list
    local validFIDs = {
        "FID1",
        "FID2",
        "FID3"
    }
    for _, validFID in ipairs(validFIDs) do
        if fid == validFID then
            return true
        end
    end
    return false
end

-- Define the mint function to create new tokens
local function mintTokens(quantity, recipient)
    -- Check if the recipient's {FID} number is valid
    if isValidFID(recipient) then
        -- Mint tokens only if the total supply has not been exceeded
        if totalSupply - quantity >= 0 then
            -- Update balances
            balances[recipient] = (balances[recipient] or 0) + quantity
            totalSupply = totalSupply - quantity
            -- Send a credit notice to the recipient
            ao.send({
                Target = recipient,
                Tags = {
                    Action = "Credit-Notice",
                    Quantity = tostring(quantity)
                }
            })
            return true
        else
            -- Insufficient supply
            return false
        end
    else
        -- Invalid {FID} number
        return false
    end
end

-- Define the transfer handler function
handlers.add(
    "transfer",
    handlers.utils.hasMatchingTag("Action", "Transfer"),
    function(msg)
        -- Handle the transfer logic here (implementation not provided as it's not required for this contract)
    end
)

-- Define the balance handler function
handlers.add(
    "balance",
    handlers.utils.hasMatchingTag("Action", "Balance"),
    function(msg)
        -- Handle the balance inquiry logic here (implementation not provided as it's not required for this contract)
    end
)

-- Define the balances handler function
handlers.add(
    "balances",
    handlers.utils.hasMatchingTag("Action", "Balances"),
    function(msg)
        -- Handle the balances inquiry logic here (implementation not provided as it's not required for this contract)
    end
)

-- Define the info handler function
handlers.add(
    "info",
    handlers.utils.hasMatchingTag("Action", "Info"),
    function(msg)
        -- Handle the contract information inquiry logic here (implementation not provided as it's not required for this contract)
    end
)

-- Define the mint handler function
handlers.add(
    "mint",
    handlers.utils.hasMatchingTag("Action", "Mint"),
    function(msg)
        -- Mint tokens if the message is from a trusted source (implementation not provided as it's not required for this contract)
    end
)

-- Return the contract
return {
    mintTokens = mintTokens
}
