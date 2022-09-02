import awardImg from '../../assets/new-award.avif';
import awardImg2 from '../../assets/medcare_award.avif';

function AwardCarousel() {
  return (
    <div
      id="carouselExampleSlidesOnly"
      class="carousel slide relative"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner relative w-full overflow-hidden">
        <div class="carousel-item active relative float-left w-full">
          <img src={awardImg} class="block w-auto" alt="Award 1" />
        </div>
        <div class="carousel-item relative float-left w-full">
          <img src={awardImg2} class="block w-auto" alt="Award 2" />
        </div>
      </div>
    </div>
  );
}

export default AwardCarousel;
