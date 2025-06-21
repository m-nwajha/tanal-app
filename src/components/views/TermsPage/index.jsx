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
const TermsPage = () => {
  const theme = useTheme();
  return (
    <>
      <Breadcrumb
        title={'الأحكام والشروط'}
        breadcrumbHistory={['الأحكام والشروط']}
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
                مرحباً بكم في موقع شركة تنال الأولى للاستثمار. باستخدامك لهذا
                الموقع، فإنك توافق على الالتزام بالشروط والأحكام التالية. إذا
                كنت لا توافق على أي جزء من هذه الشروط، نرجو منك عدم استخدام
                الموقع.
                <br />
                <br />
                <strong>1. قبول الشروط:</strong>
                <br />
                باستخدام هذا الموقع، فإنك تقر بأنك قرأت وفهمت ووافقت على هذه
                الشروط.
                <br />
                <br />
                <strong>2. التعديلات:</strong>
                <br />
                تحتفظ شركة تنال الأولى بالحق في تعديل أو تحديث هذه الشروط في أي
                وقت دون إشعار مسبق. تقع على عاتق المستخدم مسؤولية مراجعة هذه
                الشروط بانتظام.
                <br />
                <br />
                <strong>3. الملكية الفكرية:</strong>
                <br />
                جميع المحتويات الموجودة على هذا الموقع، بما في ذلك النصوص والصور
                والشعارات، هي ملك حصري لشركة تنال الأولى للاستثمار ولا يجوز
                نسخها أو إعادة استخدامها دون إذن خطي مسبق.
                <br />
                <br />
                <strong>4. استخدام الموقع:</strong>
                <br />
                يوافق المستخدم على استخدام الموقع فقط للأغراض القانونية وبطريقة
                لا تنتهك حقوق الآخرين أو تقيّد استخدامهم للموقع.
                <br />
                <br />
                <strong>5. حدود المسؤولية:</strong>
                <br />
                لا تتحمل الشركة أي مسؤولية عن أي خسائر أو أضرار ناتجة عن استخدام
                هذا الموقع أو الاعتماد على أي من محتوياته.
                <br />
                <br />
                <strong>6. الروابط الخارجية:</strong>
                <br />
                قد يحتوي الموقع على روابط لمواقع أخرى. نحن لسنا مسؤولين عن محتوى
                أو سياسات الخصوصية لتلك المواقع.
                <br />
                <br />
                <strong>7. القانون الواجب التطبيق:</strong>
                <br />
                تخضع هذه الشروط وتُفسر وفقًا لأنظمة وقوانين المملكة العربية
                السعودية.
                <br />
                <br />
                <strong>للتواصل معنا:</strong>
                <br />
                إذا كان لديك أي استفسار بشأن هذه الشروط، يرجى التواصل معنا من
                خلال صفحة الاتصال بالموقع.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default TermsPage;
