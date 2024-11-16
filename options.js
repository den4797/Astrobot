export const formMessageOptions = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: '1', callback_data: 'data1'}, {text: '2', callback_data: 'data2'}, {text: '3', callback_data: 'data3'}],
            [{text: '4', callback_data: 'data4'}, {text: '5', callback_data: 'data5'}],
            [{text: '6', callback_data: 'data6'}]
        ]
    })
}