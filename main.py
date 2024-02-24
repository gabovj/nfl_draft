import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# Load the data
data = pd.read_csv('df_all.csv')

# Rename columns for clarity
data.rename(columns={'Pos_x': 'Position', 'Pos_y': 'Draft_Position'}, inplace=True)

# Replace the '-' in 'Ht' with '.' and convert to float
data['Ht'] = data['Ht'].str.replace('-', '.').astype(float)

# Drop the 'Unnamed: 0' column as it's just an index
data.drop(columns=['Unnamed: 0'], inplace=True)

# Handling missing values
numerical_columns = ['Ht', 'Wt', '40yd', 'Vertical', 'Bench', 'Broad Jump', '3Cone', 'Shuttle', 'Age']
# Group by 'Position' and fill missing numerical values with the median of that group
for col in numerical_columns:
    data[col] = data.groupby('Position')[col].transform(lambda x: x.fillna(x.median()))

# Note: This approach will leave NaNs intact if a particular position group doesn't have any non-NaN values for a column
# So, as a fallback, fill remaining NaNs with the overall median
data[numerical_columns] = data[numerical_columns].fillna(data[numerical_columns].median())

# Handling NaN values in 'Rnd' and 'Pick' with a placeholder value
data['Rnd'].fillna(-1, inplace=True)
data['Pick'].fillna(-1, inplace=True)

# Handling NaN values in 'Tm' and 'Draft Position' with a string 'Undrafted'
data['Tm'].fillna('Undrafted', inplace=True)
data['Draft_Position'].fillna('Undrafted', inplace=True)

# Feature engineering

# BMI (Body Mass Index)
# Convert height from feet to meters (1 foot = 0.3048 meters)
data['Ht_m'] = data['Ht'] * 0.3048
# Convert weight from pounds to kilograms (1 pound = 0.453592 kilograms)
data['Wt_kg'] = data['Wt'] * 0.453592
# Calculate BMI
data['BMI'] = data['Wt_kg'] / (data['Ht_m'] ** 2)

# Save the cleaned data (optional)
# data.to_csv('cleaned_df.csv', index=False)

# Load the data
c_data = pd.read_csv('cleaned_df.csv')
# Summary statistics
print(c_data.describe())
print(c_data.info())

# Set the aesthetic style of the plots
sns.set_style("whitegrid")

# Distribution of the 'drafted' column
plt.figure(figsize=(6, 4))
sns.countplot(x='drafted', data=c_data)
plt.title('Distribution of Drafted vs. Undrafted Players')
plt.xlabel('Drafted')
plt.ylabel('Count')
plt.show()
plt.savefig('distribution_drafted.png')