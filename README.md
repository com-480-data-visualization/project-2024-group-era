# Project of Data Visualization (COM-480)

| Student's name   | SCIPER |
| --------------   | ------ |
| Adriana Orellana | 376792 |
| Angel Zenteno    | 376890 |
| Jianan Xu        | 370489 |

[Milestone 1](#milestone-1) • [Milestone 2](#milestone-2) • [Milestone 3](#milestone-3)

## Milestone 1 (29th March, 5pm)

**10% of the final grade**

This is a preliminary milestone to let you set up goals for your final project and assess the feasibility of your ideas.
Please, fill the following sections about your project.

*(max. 2000 characters per section)*

### Dataset

> We sourced our dataset from the [IUCN Red List](https://www.iucnredlist.org/support/contact), focusing on animals classified under various conservation statuses: Extinct (EX), Extinct in the Wild (EW), Critically Endangered (CR), Endangered (EN), Vulnerable (VU), and Near Threatened (NT). The initial dataset, provided in CSV format, contained 25,183 entries, each detailing 20 attributes. To augment our data, we developed a script to scrap additional information through the IUCN Red List API, aiming for a comprehensive portrayal of conservation-challenged animals. The scrapped data dataset was a structured directory with 1,799 subfolders, each representing an individual animal and containing 6 JSON files with additional attributes.
>
> We identified that each animal is marked by a unique ID. However, the initial CSV dataset faced two significant challenges: (1) the duplication of some animal entries and (2) the presence of numerous empty fields, a consequence of the limited information available on these conservation-threatened species. These gaps detracted from the dataset's utility for visualization, necessitating a phase of data preprocessing and cleaning. We merged the CSV and scraped data, then carefully eliminated duplicate animal entries and attributes with null values to ensure data integrity.
>
> Through this rigorous process, we refined our dataset, in JSON format, to include 1,799 animals, now enriched with 64 attributes. Below is an example illustrating how our dataset is formatted:
>
> ![image-20240328002051292](https://raw.githubusercontent.com/JiananAlvin/image_bed/master/image-20240328002051292.png)

### Problematic

> **General Topic and Main Axis Development**
>
> Every year, approximately 1,000 species face extinction, raising a critical question: Will humans become the only inhabitants of Earth after several centuries? This pressing concern underscores the urgency for immediate conservation actions. The foundation of effective animal protection lies in enhancing public awareness and consensus, with data serving as a pivotal tool for this purpose. Visualization acts as the conduit, bridging the gap between data and public perception.
>
> **Overview, Motivation, and Target Audience**
>
> Our project aims to create a dynamic and informative webpage targeted primarily at students, fostering increased awareness about conservation-challenged animals. This initiative is driven by the belief that education and engagement can catalyze collective action towards animal conservation.
>
> **Visualization Content and Features**
>
> 1. **3D navigable globe:** A visualization showcasing the global distribution of conservation-challenged animals, offering users a comprehensive understanding of their spread and hotspots.
>
> 2. **Species Profiles:** Detailed profiles for each species, including visuals and information on appearance, diet, habits, behaviors, and conservation measures.
>
> 3. **Educational Content:** Curated educational videos that highlight the importance of conservation efforts and inspire viewers to contribute to these causes.
>
> 4. **Interactive Features:** We plan to integrate innovative interactive elements to further engage users:
>
>    - **EcoSurvival Game:** A captivating game where participants match conservation-challenged animals with their ideal ecological requirements, encompassing food, habitats, and more. High scorers will be awarded a certificate of achievement, fostering learning through engaging gameplay.
>
>    - **ML EcoForecast:** An interactive machine learning model allowing users to simulate the impact of various conservation actions on species populations, visually demonstrating the potential outcomes of their efforts.
>
> *Note: Due to time constraints, we will implement either the game or the forecasting. If time permits, we aspire to include both to maximize user engagement and educational value.*

### Exploratory Data Analysis

> Pre-processing of the data set you chose
> - Show some basic statistics and get insights about the data

### Related work


> **Originality**
>
> Our approach revolutionizes the way conservation-challenged animals data is presented by shifting from the traditional, static encyclopedic format to an engaging, dynamic user experience. We introduce a 3D navigable globe that embeds animal profiles, allowing users to explore species by region with simple gestures. This immersive interface is a departure from the norm,  inviting users to engage deeply with the content. Additionally, we innovate by integrating gamification or/and machine learning predictions through features like the EcoSurvival game or/and ML EcoForecast. These elements are designed not just for engagement but to spur users into conservation actions, a significant leap beyond the informational offerings of most sites. In conclusion, Our originality lies in these interactive and educational enhancements, drawing on diverse inspirations to make environmental awareness both informative and enjoyable.
>
> **Source of Inspiration**
>
> After extensive brainstorming and reviewing some relevant websites,  we've identified several sources (shown as bellows) from which we're considering drawing  inspiration. With preliminary approval from our professors, we MAY adapt some of their innovative ideas to our project.
>
> [Species in Pieces](http://species-in-pieces.com/#), [react-globe.gl](https://vasturiano.github.io/react-globe.gl/), [Animalia](https://animalia.bio/)

## Milestone 2 (26th April, 5pm)

**10% of the final grade**


## Milestone 3 (31st May, 5pm)

**80% of the final grade**


## Late policy

- < 24h: 80% of the grade for the milestone
- < 48h: 70% of the grade for the milestone

