
import os

# SECRET_KEY = os.urandom(24)
SECRET_KEY = "dsfasfsdgdfhgsdfsdft"

DEBUG = True

DB_USERNAME = 'root'
DB_PASSWORD = 'root'
DB_HOST = '127.0.0.1'
DB_PORT = '3306'
DB_NAME = 'zlbbs'

DB_URL = 'mysql+pymysql://%s:%s@%s:%s/%s?charset=utf8' %(DB_USERNAME,DB_PASSWORD,DB_HOST,DB_PORT,DB_NAME)

SQLALCHEMY_DATABASE_URI = DB_URL
SQLALCHEMY_TRACK_MODIFICATIONS = False


CMS_USER_ID = 'SDFWERWSE'
FRONT_USER_ID = 'SDFASFSD234320645KSDLFD'

#发送者邮箱的服务器
MAIL_SERVER = "smtp.qq.com"
MAIL_PORT = 587
MAIL_USE_TLS = True
# MAIL_USE_SSL :
MAIL_USERNAME = "1737792495@qq.com"
MAIL_PASSWORD = "fawxkygqdnwpfbjd"
MAIL_DEFAULT_SENDER = "1737792495@qq.com"


# 阿里大于相关配置
ALIDAYU_APP_KEY = '23709557'
ALIDAYU_APP_SECRET = 'd9e430e0a96e21c92adacb522a905c4b'
ALIDAYU_SIGN_NAME = '小饭桌应用'
ALIDAYU_TEMPLATE_CODE = 'SMS_68465012'

#UEditor的相关配置
UEDITOR_UPLOAD_TO_QINIU = True
UEDITOR_QINIU_ACCESS_KEY = "JJuhUQt-Fqxh0QshYtWmjjBxfXYRYqY8tEEYWT_N"
UEDITOR_QINIU_SECRET_KEY = "NQNJw54n1ud_Pf3RgL0FeEINYLA_6CnE1H08yg4T"
UEDITOR_QINIU_BUCKET_NAME = "zengvideo"
UEDITOR_QINIU_DOMAIN = "http://qj7j4v4i9.hd-bkt.clouddn.com/"

# flask-paginate的相关配置
PER_PAGE = 10

#celery先关的配置
CELERY_RESULT_BACKEND = "redis://127.0.0.1:6379/0"
CELERY_BROKER_URL = "redis://127.0.0.1:6379/0"