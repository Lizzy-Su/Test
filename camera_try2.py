from PyQt5.QtGui import *
from PyQt5.QtWidgets import *
from PyQt5.QtCore import *
from camera_1.tryneww import *
#from flower_classification import *
import cv2
import sys
from keras.models import load_model
import numpy as np
from PIL import Image
import warnings
warnings.filterwarnings("ignore")


class CameraPageWindow(QWidget,Ui_Form):
    #returnSignal = pyqtSignal()
    def __init__(self,parent=None):
         super(CameraPageWindow, self).__init__(parent)
         self.timer_camera = QTimer() #初始化定时器
         self.cap = cv2.VideoCapture() #初始化摄像头
         self.cap.set(cv2.CAP_PROP_FRAME_WIDTH, 500)
         self.cap.set(cv2.CAP_PROP_FRAME_HEIGHT, 400)
         self.CAM_NUM = 0+cv2.CAP_DSHOW
         self.setupUi(self)
         self.slot_init()

    def slot_init(self):
        self.timer_camera.timeout.connect(self.show_camera)
        #信号和槽连接
        #self.pushButton.clicked.connect(self.returnSignal)
        self.pushButton.clicked.connect(self.slotCameraButton)
        self.pushButton_4.clicked.connect(self.capture)

    def show_camera(self):
        flag,self.image = self.cap.read()
        self.image = cv2.flip(self.image, 1)
        show = cv2.resize(self.image,(400,300))
        show = cv2.cvtColor(show, cv2.COLOR_BGR2RGB)
        show = cv2.cvtColor(self.image, cv2.COLOR_BGR2RGB)
        showImage = QImage(show.data, show.shape[1],show.shape[0],QImage.Format_RGB888)
        self.label.setPixmap(QPixmap.fromImage(showImage))

     #打开关闭摄像头控制
    def slotCameraButton(self):
        if self.timer_camera.isActive() == False:
            #打开摄像头并显示图像信息
            self.openCamera()
        else:
         #关闭摄像头并清空显示信息
            self.closeCamera()

     #打开摄像头
    def openCamera(self):
        flag = self.cap.open(self.CAM_NUM)
        if flag == False:
            msg = QMessageBox.Warning(self, u'Warning', u'请检测相机与电脑是否连接正确',
            buttons=QMessageBox.Ok,
            defaultButton=QMessageBox.Ok)
        else:
             self.timer_camera.start(30)
             self.pushButton.setText('关闭摄像头')

    #关闭摄像头
    def closeCamera(self):
        self.timer_camera.stop()
        self.cap.release()
        self.label.clear()
        #self.pushButton.setText('打开摄像头')

    #获取帧频并识别
    def capture(self):
        print(self.image.shape)
        fileName = 'D:/Video/image' + '2' + '.jpg'
        cv2.imwrite(fileName, self.image , [cv2.IMWRITE_JPEG_QUALITY, 100])
        print('done0')
        model = load_model('flower_classifier.h5')  # 导入模型
        print('done1')
        image = Image.open(fileName)
        image = image.resize([512, 512])
        image = np.array(image)
        image = image.reshape(1, 512, 512, 3)
        #cv2.imshow('input', frame)
        print('done2')
        #
        results = ['0', '1', '2', '3', '4', '5', '6']  # 标签
        result = model.predict(image)[0].tolist().index(1.0)  # 预测
        re=results[result]
        print(results[result])
        self.label_3.setText(re)
# if __name__ == '__main__':
#     app = QtWidgets.QApplication(sys.argv)
#     my_windows = CameraPageWindow()  # 实例化对象
#     #my_windows.setWindowTitle("布匹缺陷检测软件")
#     #my_windows.show()  # 显示窗口
#     sys.exit(app.exec_())

if __name__ == "__main__":
    app = QApplication(sys.argv)
    myWin = CameraPageWindow()
    myWin.show()
    sys.exit(app.exec_())