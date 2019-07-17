const uuid = require('uuid/v4')

export async function handler (event, context) {
  return {
    statusCode: 200,
    body: `Hello - ${uuid()}`
  }
}
