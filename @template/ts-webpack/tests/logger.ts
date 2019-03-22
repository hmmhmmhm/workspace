export default (log : any, noEnter = false) : any => {
    const now = new Date()
    const timeFormat =
        (String(now.getHours()).length > 1 ? now.getHours() : '0' + now.getHours()) +
        ':' + (String(now.getMinutes()).length > 1 ? now.getMinutes() : '0' + now.getMinutes()) +
        ':' + (String(now.getSeconds()).length > 1 ? now.getSeconds() : '0' + now.getSeconds())

    const defaultFormat = String.fromCharCode(0x1b) + '[34;1m' + '[%time%] ' + String.fromCharCode(0x1b) + '[37;1m' + '%log%'
    if (noEnter) return process.stdout.write(defaultFormat.replace('%time%', timeFormat).replace('%log%', log))
    console.log(defaultFormat.replace('%time%', timeFormat).replace('%log%', log))
}