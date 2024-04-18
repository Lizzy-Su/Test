import json

from channels.generic.websocket import WebsocketConsumer
socket_list = []
class ChatConsumer(WebsocketConsumer):
    def connect(self):
        self.accept()
        self.send("hi")
        socket_list.append(self)

    def disconnect(self, close_code):
        pass

    def receive(self, text_data):
        text_data_json = json.loads(text_data)
        message = text_data_json
        print(socket_list)
        for ws in socket_list:  # 遍历所有的WebsocketConsumer对象
            ws.send(text_data=json.dumps(message))  # 对每一个WebsocketConsumer对象发送数据
        # self.send(text_data=json.dumps(message))