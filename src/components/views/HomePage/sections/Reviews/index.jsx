'use client';
import { useEffect } from 'react';
import { Container, Grid } from '@mui/material';
import SectionHeader from './components/SectionHeader';
import { WrapperStyled } from './style';
import ReviewItem from './components/ReviewItem';

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { END_POINTS } from '@/constants/END_POINTS';
import useAPI from '@/hooks/useAPI';
import { API_KEY } from '@/config/API';
import SkeletonSection from './components/SkeletonSection';
const Reviews = () => {
  // Use API.
  const { data, get, loading } = useAPI(END_POINTS.REVIEW, API_KEY);
  // useEffect.
  useEffect(() => {
    get();
  }, []);
  return (
    <WrapperStyled>
      <Container maxWidth='lg'>
        <SectionHeader />
        {loading ? (
          <SkeletonSection />
        ) : (
          <Swiper
            style={{
              '--swiper-navigation-color': '#192954',
            }}
            modules={[Navigation]}
            navigation
            spaceBetween={30}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              600: {
                slidesPerView: 2,
              },
              960: {
                slidesPerView: 3,
              },
            }}>
            {data.map(reviewItem => (
              <SwiperSlide key={reviewItem._id}>
                <ReviewItem getData={reviewItem} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </Container>
    </WrapperStyled>
  );
};

export default Reviews;
