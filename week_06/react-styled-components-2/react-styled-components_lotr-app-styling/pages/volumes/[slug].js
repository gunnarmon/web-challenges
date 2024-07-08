import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { volumes } from "../../lib/data";
import styled, { css } from "styled-components";

export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const volumeIndex = volumes.findIndex((volume) => volume.slug === slug);

  const volume = volumes[volumeIndex];
  const previousVolume = volumes[volumeIndex - 1];
  const nextVolume = volumes[volumeIndex + 1];

  if (!volume) {
    return null;
  }

  const { title, description, cover, books } = volume;

  return (
    <>
      <StyledLink href="/volumes">← All Volumes</StyledLink>
      <StyledTitle>{title}</StyledTitle>
      <StyledDescription>{description}</StyledDescription>
      <StyledBookSection $color={volumes.color}>
        <StyledList>
          {books.map(({ ordinal, title }) => (
            <StyledListItem key={title}>
              {ordinal}: <strong>{title}</strong>
            </StyledListItem>
          ))}
        </StyledList>

        <StlyedImage
          src={cover}
          alt={`Cover image of ${title}`}
          width={140}
          height={230}
        />
      </StyledBookSection>
      <StyledNavSection>
        {previousVolume ? (
          <div>
            <Link href={`/volumes/${previousVolume.slug}`}>
              ← Previous Volume: {previousVolume.title}
            </Link>
          </div>
        ) : null}
        {nextVolume ? (
          <div>
            <Link href={`/volumes/${nextVolume.slug}`}>
              Next Volume: {nextVolume.title} →
            </Link>
          </div>
        ) : null}
      </StyledNavSection>
    </>
  );
}

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StlyedImage = styled(Image)`
  box-shadow: var(--box-shadow-book);

  &:hover {
    box-shadow: var(--box-shadow-book--hover);
  }
`;

const StyledTitle = styled.h1`
  margin: 2rem;
  font: var(--font-headline-1);
`;

const StyledDescription = styled.p`
  margin: 2rem;
  font: var(--font-body);
`;

const StyledBookSection = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 2rem;

  /*   ${(props) =>
    props.$variant === "volumeOne" &&
    css`
      background-color: var(--color-earth);
    `} */
`;

const StyledList = styled.ul`
  color: white;
  list-style: none;
`;

const StyledListItem = styled.li`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  margin-bottom: 2rem;
  gap: 0.5rem;
`;

const StyledNavSection = styled.section``;
