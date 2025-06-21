'use client';
import Breadcrumb from '@/components/sections/Breadcrumb';
import {
  Box,
  Container,
  Grid,
  Typography,
  useTheme,
} from '@mui/material';
import bg from '@images/bg-pattern2.svg';
const PrivacyPolicyPage = () => {
  const theme = useTheme();

  return (
    <>
      <Breadcrumb
        title={'سياسة الخصوصية'}
        breadcrumbHistory={['سياسة الخصوصية']}
      />
      <Box
        component='section'
        sx={{
          'paddingBlock': '7rem 5rem',
          'my': '4rem',
          'position': 'relative',
          '&:after': {
            content: '""',
            position: 'absolute',
            inset: '0',
            width: '85%',
            zIndex: '-2',
            backgroundColor: theme.palette.primary?.main,
            borderRadius: '90px 0 0 0px',
          },
          [theme.breakpoints.down('md')]: {
            '&:after': {
              width: '98%',
              borderRadius: '50px 0 0 0px',
            },
          },
          '&:before': {
            content: '""',
            position: 'absolute',
            inset: '0',
            zIndex: '-1',
            backgroundImage: `url(${bg.src})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right top',
            backgroundSize: '30%',
            opacity: '0.1',
          },
        }}>
        <Container maxWidth='lg'>
          <Grid
            container
            spacing={4}>
            <Grid
              item
              size={10}>
              <Typography
                sx={{
                  color: theme.palette.quinary.main,
                  fontFamily: theme.typography.IBM,
                }}
                variant='body1'>
                نُقدر ثقتكم في موقع شركة تنال الأولى للاستثمار ونلتزم بحماية
                خصوصيتكم. توضح هذه السياسة كيفية جمع واستخدام وحماية المعلومات
                الشخصية التي يتم تزويدنا بها عند استخدام الموقع.
                <br />
                <br />
                <strong>1. المعلومات التي نجمعها:</strong>
                <br />
                قد نقوم بجمع معلومات مثل الاسم، رقم الهاتف، البريد الإلكتروني،
                ومعلومات أخرى ذات صلة بخدماتنا عند تعبئة النماذج أو التواصل
                معنا.
                <br />
                <br />
                <strong>2. استخدام المعلومات:</strong>
                <br />
                نستخدم المعلومات لتقديم خدماتنا بشكل أفضل، والرد على
                الاستفسارات، وتحسين تجربة المستخدم، وإرسال تحديثات تتعلق
                بخدماتنا.
                <br />
                <br />
                <strong>3. حماية المعلومات:</strong>
                <br />
                نلتزم بحماية بياناتكم من الوصول أو الاستخدام غير المصرح به من
                خلال إجراءات أمنية مناسبة.
                <br />
                <br />
                <strong>4. مشاركة المعلومات:</strong>
                <br />
                لا نشارك معلوماتكم مع أي جهة خارجية دون إذن مسبق، إلا إذا طُلب
                منا ذلك بموجب القانون.
                <br />
                <br />
                <strong>5. ملفات تعريف الارتباط (Cookies):</strong>
                <br />
                قد نستخدم الكوكيز لتحسين تجربة التصفح. يمكنكم تعطيل الكوكيز من
                إعدادات المتصفح.
                <br />
                <br />
                <strong>6. روابط خارجية:</strong>
                <br />
                قد يحتوي الموقع على روابط لمواقع أخرى. نحن غير مسؤولين عن سياسات
                الخصوصية لتلك المواقع.
                <br />
                <br />
                <strong>7. التعديلات على سياسة الخصوصية:</strong>
                <br />
                نحتفظ بالحق في تعديل هذه السياسة في أي وقت. سيتم نشر التحديثات
                على هذه الصفحة.
                <br />
                <br />
                <strong>للتواصل معنا:</strong>
                <br />
                إذا كان لديكم أي استفسار بخصوص سياسة الخصوصية، يرجى التواصل عبر
                نموذج الاتصال الموجود على الموقع.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default PrivacyPolicyPage;
