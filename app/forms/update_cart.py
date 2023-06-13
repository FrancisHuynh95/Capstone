from flask_wtf import FlaskForm
from wtforms import IntegerField
from wtforms.validators import DataRequired
from flask_wtf.file import FileField, FileAllowed, FileRequired
from app.api.aws_helpers import ALLOWED_IMAGES

class UpdateProductForm(FlaskForm):
    quantitiy = IntegerField('quantity', validators=[DataRequired()])
